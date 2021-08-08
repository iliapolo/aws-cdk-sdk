import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AmplifyBackendClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cloneBackend(input: shapes.AmplifyBackendCloneBackendRequest): AmplifyBackendResponsesCloneBackend {
    return new AmplifyBackendResponsesCloneBackend(this, this.__resources, input);
  }

  public createBackend(input: shapes.AmplifyBackendCreateBackendRequest): AmplifyBackendResponsesCreateBackend {
    return new AmplifyBackendResponsesCreateBackend(this, this.__resources, input);
  }

  public createBackendApi(input: shapes.AmplifyBackendCreateBackendApiRequest): AmplifyBackendResponsesCreateBackendApi {
    return new AmplifyBackendResponsesCreateBackendApi(this, this.__resources, input);
  }

  public createBackendAuth(input: shapes.AmplifyBackendCreateBackendAuthRequest): AmplifyBackendResponsesCreateBackendAuth {
    return new AmplifyBackendResponsesCreateBackendAuth(this, this.__resources, input);
  }

  public createBackendConfig(input: shapes.AmplifyBackendCreateBackendConfigRequest): AmplifyBackendResponsesCreateBackendConfig {
    return new AmplifyBackendResponsesCreateBackendConfig(this, this.__resources, input);
  }

  public createToken(input: shapes.AmplifyBackendCreateTokenRequest): AmplifyBackendResponsesCreateToken {
    return new AmplifyBackendResponsesCreateToken(this, this.__resources, input);
  }

  public deleteBackend(input: shapes.AmplifyBackendDeleteBackendRequest): AmplifyBackendResponsesDeleteBackend {
    return new AmplifyBackendResponsesDeleteBackend(this, this.__resources, input);
  }

  public deleteBackendApi(input: shapes.AmplifyBackendDeleteBackendApiRequest): AmplifyBackendResponsesDeleteBackendApi {
    return new AmplifyBackendResponsesDeleteBackendApi(this, this.__resources, input);
  }

  public deleteBackendAuth(input: shapes.AmplifyBackendDeleteBackendAuthRequest): AmplifyBackendResponsesDeleteBackendAuth {
    return new AmplifyBackendResponsesDeleteBackendAuth(this, this.__resources, input);
  }

  public deleteToken(input: shapes.AmplifyBackendDeleteTokenRequest): AmplifyBackendResponsesDeleteToken {
    return new AmplifyBackendResponsesDeleteToken(this, this.__resources, input);
  }

  public generateBackendApiModels(input: shapes.AmplifyBackendGenerateBackendApiModelsRequest): AmplifyBackendResponsesGenerateBackendApiModels {
    return new AmplifyBackendResponsesGenerateBackendApiModels(this, this.__resources, input);
  }

  public fetchBackend(input: shapes.AmplifyBackendGetBackendRequest): AmplifyBackendResponsesFetchBackend {
    return new AmplifyBackendResponsesFetchBackend(this, this.__resources, input);
  }

  public fetchBackendApi(input: shapes.AmplifyBackendGetBackendApiRequest): AmplifyBackendResponsesFetchBackendApi {
    return new AmplifyBackendResponsesFetchBackendApi(this, this.__resources, input);
  }

  public fetchBackendApiModels(input: shapes.AmplifyBackendGetBackendApiModelsRequest): AmplifyBackendResponsesFetchBackendApiModels {
    return new AmplifyBackendResponsesFetchBackendApiModels(this, this.__resources, input);
  }

  public fetchBackendAuth(input: shapes.AmplifyBackendGetBackendAuthRequest): AmplifyBackendResponsesFetchBackendAuth {
    return new AmplifyBackendResponsesFetchBackendAuth(this, this.__resources, input);
  }

  public fetchBackendJob(input: shapes.AmplifyBackendGetBackendJobRequest): AmplifyBackendResponsesFetchBackendJob {
    return new AmplifyBackendResponsesFetchBackendJob(this, this.__resources, input);
  }

  public fetchToken(input: shapes.AmplifyBackendGetTokenRequest): AmplifyBackendResponsesFetchToken {
    return new AmplifyBackendResponsesFetchToken(this, this.__resources, input);
  }

  public importBackendAuth(input: shapes.AmplifyBackendImportBackendAuthRequest): AmplifyBackendResponsesImportBackendAuth {
    return new AmplifyBackendResponsesImportBackendAuth(this, this.__resources, input);
  }

  public listBackendJobs(input: shapes.AmplifyBackendListBackendJobsRequest): AmplifyBackendResponsesListBackendJobs {
    return new AmplifyBackendResponsesListBackendJobs(this, this.__resources, input);
  }

  public removeAllBackends(input: shapes.AmplifyBackendRemoveAllBackendsRequest): AmplifyBackendResponsesRemoveAllBackends {
    return new AmplifyBackendResponsesRemoveAllBackends(this, this.__resources, input);
  }

  public removeBackendConfig(input: shapes.AmplifyBackendRemoveBackendConfigRequest): AmplifyBackendResponsesRemoveBackendConfig {
    return new AmplifyBackendResponsesRemoveBackendConfig(this, this.__resources, input);
  }

  public updateBackendApi(input: shapes.AmplifyBackendUpdateBackendApiRequest): AmplifyBackendResponsesUpdateBackendApi {
    return new AmplifyBackendResponsesUpdateBackendApi(this, this.__resources, input);
  }

  public updateBackendAuth(input: shapes.AmplifyBackendUpdateBackendAuthRequest): AmplifyBackendResponsesUpdateBackendAuth {
    return new AmplifyBackendResponsesUpdateBackendAuth(this, this.__resources, input);
  }

  public updateBackendConfig(input: shapes.AmplifyBackendUpdateBackendConfigRequest): AmplifyBackendResponsesUpdateBackendConfig {
    return new AmplifyBackendResponsesUpdateBackendConfig(this, this.__resources, input);
  }

  public updateBackendJob(input: shapes.AmplifyBackendUpdateBackendJobRequest): AmplifyBackendResponsesUpdateBackendJob {
    return new AmplifyBackendResponsesUpdateBackendJob(this, this.__resources, input);
  }

}

export class AmplifyBackendResponsesCloneBackend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendCloneBackendRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CloneBackend.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          TargetEnvironmentName: this.__input.targetEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneBackend.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CloneBackend.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          TargetEnvironmentName: this.__input.targetEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneBackend.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CloneBackend.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          TargetEnvironmentName: this.__input.targetEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneBackend.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CloneBackend.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          TargetEnvironmentName: this.__input.targetEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneBackend.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CloneBackend.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          TargetEnvironmentName: this.__input.targetEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneBackend.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CloneBackend.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          TargetEnvironmentName: this.__input.targetEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneBackend.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesCreateBackend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendCreateBackendRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackend.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          AppName: this.__input.appName,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackend.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackend.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          AppName: this.__input.appName,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackend.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackend.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          AppName: this.__input.appName,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackend.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackend.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          AppName: this.__input.appName,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackend.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackend.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          AppName: this.__input.appName,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackend.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackend.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          AppName: this.__input.appName,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackend.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesCreateBackendApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendCreateBackendApiRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAPI.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig.additionalAuthTypes,
            ApiName: this.__input.resourceConfig.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig.service,
            TransformSchema: this.__input.resourceConfig.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAPI.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAPI.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig.additionalAuthTypes,
            ApiName: this.__input.resourceConfig.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig.service,
            TransformSchema: this.__input.resourceConfig.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAPI.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAPI.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig.additionalAuthTypes,
            ApiName: this.__input.resourceConfig.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig.service,
            TransformSchema: this.__input.resourceConfig.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAPI.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAPI.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig.additionalAuthTypes,
            ApiName: this.__input.resourceConfig.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig.service,
            TransformSchema: this.__input.resourceConfig.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAPI.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAPI.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig.additionalAuthTypes,
            ApiName: this.__input.resourceConfig.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig.service,
            TransformSchema: this.__input.resourceConfig.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAPI.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAPI.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig.additionalAuthTypes,
            ApiName: this.__input.resourceConfig.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig.service,
            TransformSchema: this.__input.resourceConfig.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAPI.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesCreateBackendAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendCreateBackendAuthRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAuth.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              IdentityPoolName: this.__input.resourceConfig.identityPoolConfigs?.identityPoolName,
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
              RequiredSignUpAttributes: this.__input.resourceConfig.userPoolConfigs.requiredSignUpAttributes,
              SignInMethod: this.__input.resourceConfig.userPoolConfigs.signInMethod,
              UserPoolName: this.__input.resourceConfig.userPoolConfigs.userPoolName,
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAuth.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAuth.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              IdentityPoolName: this.__input.resourceConfig.identityPoolConfigs?.identityPoolName,
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
              RequiredSignUpAttributes: this.__input.resourceConfig.userPoolConfigs.requiredSignUpAttributes,
              SignInMethod: this.__input.resourceConfig.userPoolConfigs.signInMethod,
              UserPoolName: this.__input.resourceConfig.userPoolConfigs.userPoolName,
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAuth.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAuth.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              IdentityPoolName: this.__input.resourceConfig.identityPoolConfigs?.identityPoolName,
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
              RequiredSignUpAttributes: this.__input.resourceConfig.userPoolConfigs.requiredSignUpAttributes,
              SignInMethod: this.__input.resourceConfig.userPoolConfigs.signInMethod,
              UserPoolName: this.__input.resourceConfig.userPoolConfigs.userPoolName,
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAuth.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAuth.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              IdentityPoolName: this.__input.resourceConfig.identityPoolConfigs?.identityPoolName,
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
              RequiredSignUpAttributes: this.__input.resourceConfig.userPoolConfigs.requiredSignUpAttributes,
              SignInMethod: this.__input.resourceConfig.userPoolConfigs.signInMethod,
              UserPoolName: this.__input.resourceConfig.userPoolConfigs.userPoolName,
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAuth.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAuth.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              IdentityPoolName: this.__input.resourceConfig.identityPoolConfigs?.identityPoolName,
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
              RequiredSignUpAttributes: this.__input.resourceConfig.userPoolConfigs.requiredSignUpAttributes,
              SignInMethod: this.__input.resourceConfig.userPoolConfigs.signInMethod,
              UserPoolName: this.__input.resourceConfig.userPoolConfigs.userPoolName,
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAuth.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendAuth.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              IdentityPoolName: this.__input.resourceConfig.identityPoolConfigs?.identityPoolName,
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
              RequiredSignUpAttributes: this.__input.resourceConfig.userPoolConfigs.requiredSignUpAttributes,
              SignInMethod: this.__input.resourceConfig.userPoolConfigs.signInMethod,
              UserPoolName: this.__input.resourceConfig.userPoolConfigs.userPoolName,
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendAuth.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesCreateBackendConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendCreateBackendConfigRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendConfig.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendManagerAppId: this.__input.backendManagerAppId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendConfig.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendConfig.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendManagerAppId: this.__input.backendManagerAppId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendConfig.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendConfig.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendManagerAppId: this.__input.backendManagerAppId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendConfig.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateBackendConfig.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendManagerAppId: this.__input.backendManagerAppId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackendConfig.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesCreateToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendCreateTokenRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateToken.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get challengeCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateToken.ChallengeCode'),
        outputPath: 'ChallengeCode',
        parameters: {
          AppId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.ChallengeCode', props);
    return resource.getResponseField('ChallengeCode') as unknown as string;
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateToken.SessionId'),
        outputPath: 'SessionId',
        parameters: {
          AppId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.SessionId', props);
    return resource.getResponseField('SessionId') as unknown as string;
  }

  public get ttl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.CreateToken.Ttl'),
        outputPath: 'Ttl',
        parameters: {
          AppId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.Ttl', props);
    return resource.getResponseField('Ttl') as unknown as string;
  }

}

export class AmplifyBackendResponsesDeleteBackend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendDeleteBackendRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackend.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackend.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackend.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackend.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackend.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackend.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackend.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackend.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackend.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackend.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackend.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackend.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesDeleteBackendApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendDeleteBackendApiRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAPI.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAPI.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAPI.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAPI.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAPI.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAPI.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAPI.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAPI.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAPI.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAPI.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAPI.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAPI.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesDeleteBackendAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendDeleteBackendAuthRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAuth.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAuth.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAuth.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAuth.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAuth.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAuth.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAuth.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAuth.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAuth.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAuth.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteBackendAuth.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackendAuth.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesDeleteToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendDeleteTokenRequest) {
  }

  public get isSuccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.DeleteToken.IsSuccess'),
        outputPath: 'IsSuccess',
        parameters: {
          AppId: this.__input.appId,
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteToken.IsSuccess', props);
    return resource.getResponseField('IsSuccess') as unknown as boolean;
  }

}

export class AmplifyBackendResponsesGenerateBackendApiModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGenerateBackendApiModelsRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GenerateBackendAPIModels.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateBackendAPIModels.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GenerateBackendAPIModels.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateBackendAPIModels.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GenerateBackendAPIModels.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateBackendAPIModels.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GenerateBackendAPIModels.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateBackendAPIModels.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GenerateBackendAPIModels.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateBackendAPIModels.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GenerateBackendAPIModels.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateBackendAPIModels.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendRequest) {
  }

  public get amplifyMetaConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackend.AmplifyMetaConfig'),
        outputPath: 'AmplifyMetaConfig',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackend.AmplifyMetaConfig', props);
    return resource.getResponseField('AmplifyMetaConfig') as unknown as string;
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackend.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackend.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get appName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackend.AppName'),
        outputPath: 'AppName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackend.AppName', props);
    return resource.getResponseField('AppName') as unknown as string;
  }

  public get backendEnvironmentList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackend.BackendEnvironmentList'),
        outputPath: 'BackendEnvironmentList',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackend.BackendEnvironmentList', props);
    return resource.getResponseField('BackendEnvironmentList') as unknown as string[];
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackend.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackend.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackend',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackend.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackend.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendApiRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get resourceConfig(): AmplifyBackendResponsesFetchBackendApiResourceConfig {
    return new AmplifyBackendResponsesFetchBackendApiResourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceName'),
        outputPath: 'ResourceName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceName', props);
    return resource.getResponseField('ResourceName') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendApiResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendApiRequest) {
  }

  public get additionalAuthTypes(): shapes.AmplifyBackendBackendApiAuthType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.AdditionalAuthTypes'),
        outputPath: 'ResourceConfig.AdditionalAuthTypes',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.AdditionalAuthTypes', props);
    return resource.getResponseField('ResourceConfig.AdditionalAuthTypes') as unknown as shapes.AmplifyBackendBackendApiAuthType[];
  }

  public get apiName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.ApiName'),
        outputPath: 'ResourceConfig.ApiName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.ApiName', props);
    return resource.getResponseField('ResourceConfig.ApiName') as unknown as string;
  }

  public get conflictResolution(): AmplifyBackendResponsesFetchBackendApiResourceConfigConflictResolution {
    return new AmplifyBackendResponsesFetchBackendApiResourceConfigConflictResolution(this.__scope, this.__resources, this.__input);
  }

  public get defaultAuthType(): AmplifyBackendResponsesFetchBackendApiResourceConfigDefaultAuthType {
    return new AmplifyBackendResponsesFetchBackendApiResourceConfigDefaultAuthType(this.__scope, this.__resources, this.__input);
  }

  public get service(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.Service'),
        outputPath: 'ResourceConfig.Service',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.Service', props);
    return resource.getResponseField('ResourceConfig.Service') as unknown as string;
  }

  public get transformSchema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.TransformSchema'),
        outputPath: 'ResourceConfig.TransformSchema',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.TransformSchema', props);
    return resource.getResponseField('ResourceConfig.TransformSchema') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendApiResourceConfigConflictResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendApiRequest) {
  }

  public get resolutionStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.ConflictResolution.ResolutionStrategy'),
        outputPath: 'ResourceConfig.ConflictResolution.ResolutionStrategy',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.ConflictResolution.ResolutionStrategy', props);
    return resource.getResponseField('ResourceConfig.ConflictResolution.ResolutionStrategy') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendApiResourceConfigDefaultAuthType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendApiRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Mode'),
        outputPath: 'ResourceConfig.DefaultAuthType.Mode',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Mode', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Mode') as unknown as string;
  }

  public get settings(): AmplifyBackendResponsesFetchBackendApiResourceConfigDefaultAuthTypeSettings {
    return new AmplifyBackendResponsesFetchBackendApiResourceConfigDefaultAuthTypeSettings(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesFetchBackendApiResourceConfigDefaultAuthTypeSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendApiRequest) {
  }

  public get cognitoUserPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.CognitoUserPoolId'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.CognitoUserPoolId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.CognitoUserPoolId', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.CognitoUserPoolId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.Description'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.Description',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.Description', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.Description') as unknown as string;
  }

  public get expirationTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.ExpirationTime'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.ExpirationTime',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.ExpirationTime', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.ExpirationTime') as unknown as number;
  }

  public get openIdAuthTtl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDAuthTTL'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.OpenIDAuthTTL',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDAuthTTL', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.OpenIDAuthTTL') as unknown as string;
  }

  public get openIdClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDClientId'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.OpenIDClientId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDClientId', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.OpenIDClientId') as unknown as string;
  }

  public get openIdIatTtl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDIatTTL'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.OpenIDIatTTL',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDIatTTL', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.OpenIDIatTTL') as unknown as string;
  }

  public get openIdIssueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDIssueURL'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.OpenIDIssueURL',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDIssueURL', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.OpenIDIssueURL') as unknown as string;
  }

  public get openIdProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDProviderName'),
        outputPath: 'ResourceConfig.DefaultAuthType.Settings.OpenIDProviderName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPI.ResourceConfig.DefaultAuthType.Settings.OpenIDProviderName', props);
    return resource.getResponseField('ResourceConfig.DefaultAuthType.Settings.OpenIDProviderName') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendApiModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendApiModelsRequest) {
  }

  public get models(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPIModels.Models'),
        outputPath: 'Models',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPIModels.Models', props);
    return resource.getResponseField('Models') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendApiModels',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAPIModels.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAPIModels.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get resourceConfig(): AmplifyBackendResponsesFetchBackendAuthResourceConfig {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceName'),
        outputPath: 'ResourceName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceName', props);
    return resource.getResponseField('ResourceName') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get authResources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.AuthResources'),
        outputPath: 'ResourceConfig.AuthResources',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.AuthResources', props);
    return resource.getResponseField('ResourceConfig.AuthResources') as unknown as string;
  }

  public get identityPoolConfigs(): AmplifyBackendResponsesFetchBackendAuthResourceConfigIdentityPoolConfigs {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigIdentityPoolConfigs(this.__scope, this.__resources, this.__input);
  }

  public get service(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.Service'),
        outputPath: 'ResourceConfig.Service',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.Service', props);
    return resource.getResponseField('ResourceConfig.Service') as unknown as string;
  }

  public get userPoolConfigs(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigs {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigs(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigIdentityPoolConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get identityPoolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.IdentityPoolConfigs.IdentityPoolName'),
        outputPath: 'ResourceConfig.IdentityPoolConfigs.IdentityPoolName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.IdentityPoolConfigs.IdentityPoolName', props);
    return resource.getResponseField('ResourceConfig.IdentityPoolConfigs.IdentityPoolName') as unknown as string;
  }

  public get unauthenticatedLogin(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.IdentityPoolConfigs.UnauthenticatedLogin'),
        outputPath: 'ResourceConfig.IdentityPoolConfigs.UnauthenticatedLogin',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.IdentityPoolConfigs.UnauthenticatedLogin', props);
    return resource.getResponseField('ResourceConfig.IdentityPoolConfigs.UnauthenticatedLogin') as unknown as boolean;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get forgotPassword(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPassword {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPassword(this.__scope, this.__resources, this.__input);
  }

  public get mfa(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsMfa {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsMfa(this.__scope, this.__resources, this.__input);
  }

  public get oAuth(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuth {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuth(this.__scope, this.__resources, this.__input);
  }

  public get passwordPolicy(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsPasswordPolicy {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsPasswordPolicy(this.__scope, this.__resources, this.__input);
  }

  public get requiredSignUpAttributes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.RequiredSignUpAttributes'),
        outputPath: 'ResourceConfig.UserPoolConfigs.RequiredSignUpAttributes',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.RequiredSignUpAttributes', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.RequiredSignUpAttributes') as unknown as string[];
  }

  public get signInMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.SignInMethod'),
        outputPath: 'ResourceConfig.UserPoolConfigs.SignInMethod',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.SignInMethod', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.SignInMethod') as unknown as string;
  }

  public get userPoolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.UserPoolName'),
        outputPath: 'ResourceConfig.UserPoolConfigs.UserPoolName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.UserPoolName', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.UserPoolName') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPassword {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get deliveryMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.DeliveryMethod'),
        outputPath: 'ResourceConfig.UserPoolConfigs.ForgotPassword.DeliveryMethod',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.DeliveryMethod', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.ForgotPassword.DeliveryMethod') as unknown as string;
  }

  public get emailSettings(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPasswordEmailSettings {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPasswordEmailSettings(this.__scope, this.__resources, this.__input);
  }

  public get smsSettings(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPasswordSmsSettings {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPasswordSmsSettings(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPasswordEmailSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get emailMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailMessage'),
        outputPath: 'ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailMessage',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailMessage', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailMessage') as unknown as string;
  }

  public get emailSubject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailSubject'),
        outputPath: 'ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailSubject',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailSubject', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.ForgotPassword.EmailSettings.EmailSubject') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsForgotPasswordSmsSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get smsMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.SmsSettings.SmsMessage'),
        outputPath: 'ResourceConfig.UserPoolConfigs.ForgotPassword.SmsSettings.SmsMessage',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.ForgotPassword.SmsSettings.SmsMessage', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.ForgotPassword.SmsSettings.SmsMessage') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsMfa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get mfaMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.Mfa.MFAMode'),
        outputPath: 'ResourceConfig.UserPoolConfigs.Mfa.MFAMode',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.Mfa.MFAMode', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.Mfa.MFAMode') as unknown as string;
  }

  public get settings(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsMfaSettings {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsMfaSettings(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsMfaSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get mfaTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.Mfa.Settings.MfaTypes'),
        outputPath: 'ResourceConfig.UserPoolConfigs.Mfa.Settings.MfaTypes',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.Mfa.Settings.MfaTypes', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.Mfa.Settings.MfaTypes') as unknown as string[];
  }

  public get smsMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.Mfa.Settings.SmsMessage'),
        outputPath: 'ResourceConfig.UserPoolConfigs.Mfa.Settings.SmsMessage',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.Mfa.Settings.SmsMessage', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.Mfa.Settings.SmsMessage') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get domainPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.DomainPrefix'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.DomainPrefix',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.DomainPrefix', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.DomainPrefix') as unknown as string;
  }

  public get oAuthGrantType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.OAuthGrantType'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.OAuthGrantType',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.OAuthGrantType', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.OAuthGrantType') as unknown as string;
  }

  public get oAuthScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.OAuthScopes'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.OAuthScopes',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.OAuthScopes', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.OAuthScopes') as unknown as string[];
  }

  public get redirectSignInUrIs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.RedirectSignInURIs'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.RedirectSignInURIs',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.RedirectSignInURIs', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.RedirectSignInURIs') as unknown as string[];
  }

  public get redirectSignOutUrIs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.RedirectSignOutURIs'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.RedirectSignOutURIs',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.RedirectSignOutURIs', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.RedirectSignOutURIs') as unknown as string[];
  }

  public get socialProviderSettings(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettings {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettings(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get facebook(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsFacebook {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsFacebook(this.__scope, this.__resources, this.__input);
  }

  public get google(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsGoogle {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsGoogle(this.__scope, this.__resources, this.__input);
  }

  public get loginWithAmazon(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsLoginWithAmazon {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsLoginWithAmazon(this.__scope, this.__resources, this.__input);
  }

  public get signInWithApple(): AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsSignInWithApple {
    return new AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsSignInWithApple(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsFacebook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientId'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientId', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientId') as unknown as string;
  }

  public get clientSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientSecret'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientSecret',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientSecret', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Facebook.ClientSecret') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsGoogle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientId'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientId', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientId') as unknown as string;
  }

  public get clientSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientSecret'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientSecret',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientSecret', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.Google.ClientSecret') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsLoginWithAmazon {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientId'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientId', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientId') as unknown as string;
  }

  public get clientSecret(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientSecret'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientSecret',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientSecret', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.LoginWithAmazon.ClientSecret') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsOAuthSocialProviderSettingsSignInWithApple {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.ClientId'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.ClientId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.ClientId', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.ClientId') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.KeyId'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.KeyId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.KeyId', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.KeyId') as unknown as string;
  }

  public get privateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.PrivateKey'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.PrivateKey',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.PrivateKey', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.PrivateKey') as unknown as string;
  }

  public get teamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.TeamId'),
        outputPath: 'ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.TeamId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.TeamId', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.OAuth.SocialProviderSettings.SignInWithApple.TeamId') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchBackendAuthResourceConfigUserPoolConfigsPasswordPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendAuthRequest) {
  }

  public get additionalConstraints(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.PasswordPolicy.AdditionalConstraints'),
        outputPath: 'ResourceConfig.UserPoolConfigs.PasswordPolicy.AdditionalConstraints',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.PasswordPolicy.AdditionalConstraints', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.PasswordPolicy.AdditionalConstraints') as unknown as string[];
  }

  public get minimumLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendAuth.ResourceConfig.UserPoolConfigs.PasswordPolicy.MinimumLength'),
        outputPath: 'ResourceConfig.UserPoolConfigs.PasswordPolicy.MinimumLength',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendAuth.ResourceConfig.UserPoolConfigs.PasswordPolicy.MinimumLength', props);
    return resource.getResponseField('ResourceConfig.UserPoolConfigs.PasswordPolicy.MinimumLength') as unknown as number;
  }

}

export class AmplifyBackendResponsesFetchBackendJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetBackendJobRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetBackendJob.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackendJob.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class AmplifyBackendResponsesFetchToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendGetTokenRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetToken.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetToken.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get challengeCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetToken.ChallengeCode'),
        outputPath: 'ChallengeCode',
        parameters: {
          AppId: this.__input.appId,
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetToken.ChallengeCode', props);
    return resource.getResponseField('ChallengeCode') as unknown as string;
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetToken.SessionId'),
        outputPath: 'SessionId',
        parameters: {
          AppId: this.__input.appId,
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetToken.SessionId', props);
    return resource.getResponseField('SessionId') as unknown as string;
  }

  public get ttl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getToken',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.GetToken.Ttl'),
        outputPath: 'Ttl',
        parameters: {
          AppId: this.__input.appId,
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetToken.Ttl', props);
    return resource.getResponseField('Ttl') as unknown as string;
  }

}

export class AmplifyBackendResponsesImportBackendAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendImportBackendAuthRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ImportBackendAuth.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          IdentityPoolId: this.__input.identityPoolId,
          NativeClientId: this.__input.nativeClientId,
          UserPoolId: this.__input.userPoolId,
          WebClientId: this.__input.webClientId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportBackendAuth.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ImportBackendAuth.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          IdentityPoolId: this.__input.identityPoolId,
          NativeClientId: this.__input.nativeClientId,
          UserPoolId: this.__input.userPoolId,
          WebClientId: this.__input.webClientId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportBackendAuth.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ImportBackendAuth.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          IdentityPoolId: this.__input.identityPoolId,
          NativeClientId: this.__input.nativeClientId,
          UserPoolId: this.__input.userPoolId,
          WebClientId: this.__input.webClientId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportBackendAuth.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ImportBackendAuth.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          IdentityPoolId: this.__input.identityPoolId,
          NativeClientId: this.__input.nativeClientId,
          UserPoolId: this.__input.userPoolId,
          WebClientId: this.__input.webClientId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportBackendAuth.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ImportBackendAuth.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          IdentityPoolId: this.__input.identityPoolId,
          NativeClientId: this.__input.nativeClientId,
          UserPoolId: this.__input.userPoolId,
          WebClientId: this.__input.webClientId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportBackendAuth.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ImportBackendAuth.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          IdentityPoolId: this.__input.identityPoolId,
          NativeClientId: this.__input.nativeClientId,
          UserPoolId: this.__input.userPoolId,
          WebClientId: this.__input.webClientId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportBackendAuth.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesListBackendJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendListBackendJobsRequest) {
  }

  public get jobs(): shapes.AmplifyBackendBackendJobRespObj[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackendJobs',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ListBackendJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackendJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.AmplifyBackendBackendJobRespObj[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackendJobs',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.ListBackendJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackendJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AmplifyBackendResponsesRemoveAllBackends {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendRemoveAllBackendsRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAllBackends',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.RemoveAllBackends.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          CleanAmplifyApp: this.__input.cleanAmplifyApp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveAllBackends.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAllBackends',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.RemoveAllBackends.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          CleanAmplifyApp: this.__input.cleanAmplifyApp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveAllBackends.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAllBackends',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.RemoveAllBackends.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          CleanAmplifyApp: this.__input.cleanAmplifyApp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveAllBackends.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAllBackends',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.RemoveAllBackends.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          CleanAmplifyApp: this.__input.cleanAmplifyApp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveAllBackends.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAllBackends',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.RemoveAllBackends.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          CleanAmplifyApp: this.__input.cleanAmplifyApp,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveAllBackends.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesRemoveBackendConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendRemoveBackendConfigRequest) {
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.RemoveBackendConfig.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveBackendConfig.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

}

export class AmplifyBackendResponsesUpdateBackendApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendUpdateBackendApiRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAPI.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAPI.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAPI.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAPI.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAPI.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAPI.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAPI.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAPI.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAPI.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAPI.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendApi',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAPI.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AdditionalAuthTypes: this.__input.resourceConfig?.additionalAuthTypes,
            ApiName: this.__input.resourceConfig?.apiName,
            ConflictResolution: {
              ResolutionStrategy: this.__input.resourceConfig?.conflictResolution?.resolutionStrategy,
            },
            DefaultAuthType: {
              Mode: this.__input.resourceConfig?.defaultAuthType?.mode,
              Settings: {
                CognitoUserPoolId: this.__input.resourceConfig?.defaultAuthType?.settings?.cognitoUserPoolId,
                Description: this.__input.resourceConfig?.defaultAuthType?.settings?.description,
                ExpirationTime: this.__input.resourceConfig?.defaultAuthType?.settings?.expirationTime,
                OpenIDAuthTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdAuthTtl,
                OpenIDClientId: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdClientId,
                OpenIDIatTTL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIatTtl,
                OpenIDIssueURL: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdIssueUrl,
                OpenIDProviderName: this.__input.resourceConfig?.defaultAuthType?.settings?.openIdProviderName,
              },
            },
            Service: this.__input.resourceConfig?.service,
            TransformSchema: this.__input.resourceConfig?.transformSchema,
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAPI.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesUpdateBackendAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendUpdateBackendAuthRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAuth.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAuth.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAuth.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAuth.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAuth.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAuth.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAuth.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAuth.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAuth.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAuth.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendAuth',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendAuth.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          ResourceConfig: {
            AuthResources: this.__input.resourceConfig.authResources,
            IdentityPoolConfigs: {
              UnauthenticatedLogin: this.__input.resourceConfig.identityPoolConfigs?.unauthenticatedLogin,
            },
            Service: this.__input.resourceConfig.service,
            UserPoolConfigs: {
              ForgotPassword: {
                DeliveryMethod: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.deliveryMethod,
                EmailSettings: {
                  EmailMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailMessage,
                  EmailSubject: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.emailSettings?.emailSubject,
                },
                SmsSettings: {
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.forgotPassword?.smsSettings?.smsMessage,
                },
              },
              Mfa: {
                MFAMode: this.__input.resourceConfig.userPoolConfigs.mfa?.mfaMode,
                Settings: {
                  MfaTypes: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.mfaTypes,
                  SmsMessage: this.__input.resourceConfig.userPoolConfigs.mfa?.settings?.smsMessage,
                },
              },
              OAuth: {
                DomainPrefix: this.__input.resourceConfig.userPoolConfigs.oAuth?.domainPrefix,
                OAuthGrantType: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthGrantType,
                OAuthScopes: this.__input.resourceConfig.userPoolConfigs.oAuth?.oAuthScopes,
                RedirectSignInURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignInUrIs,
                RedirectSignOutURIs: this.__input.resourceConfig.userPoolConfigs.oAuth?.redirectSignOutUrIs,
                SocialProviderSettings: {
                  Facebook: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.facebook?.clientSecret,
                  },
                  Google: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.google?.clientSecret,
                  },
                  LoginWithAmazon: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientId,
                    ClientSecret: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.loginWithAmazon?.clientSecret,
                  },
                  SignInWithApple: {
                    ClientId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.clientId,
                    KeyId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.keyId,
                    PrivateKey: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.privateKey,
                    TeamId: this.__input.resourceConfig.userPoolConfigs.oAuth?.socialProviderSettings?.signInWithApple?.teamId,
                  },
                },
              },
              PasswordPolicy: {
                AdditionalConstraints: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.additionalConstraints,
                MinimumLength: this.__input.resourceConfig.userPoolConfigs.passwordPolicy?.minimumLength,
              },
            },
          },
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendAuth.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class AmplifyBackendResponsesUpdateBackendConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendUpdateBackendConfigRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendManagerAppId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.BackendManagerAppId'),
        outputPath: 'BackendManagerAppId',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.BackendManagerAppId', props);
    return resource.getResponseField('BackendManagerAppId') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get loginAuthConfig(): AmplifyBackendResponsesUpdateBackendConfigLoginAuthConfig {
    return new AmplifyBackendResponsesUpdateBackendConfigLoginAuthConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AmplifyBackendResponsesUpdateBackendConfigLoginAuthConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendUpdateBackendConfigRequest) {
  }

  public get awsCognitoIdentityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.LoginAuthConfig.AwsCognitoIdentityPoolId'),
        outputPath: 'LoginAuthConfig.AwsCognitoIdentityPoolId',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.LoginAuthConfig.AwsCognitoIdentityPoolId', props);
    return resource.getResponseField('LoginAuthConfig.AwsCognitoIdentityPoolId') as unknown as string;
  }

  public get awsCognitoRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.LoginAuthConfig.AwsCognitoRegion'),
        outputPath: 'LoginAuthConfig.AwsCognitoRegion',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.LoginAuthConfig.AwsCognitoRegion', props);
    return resource.getResponseField('LoginAuthConfig.AwsCognitoRegion') as unknown as string;
  }

  public get awsUserPoolsId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.LoginAuthConfig.AwsUserPoolsId'),
        outputPath: 'LoginAuthConfig.AwsUserPoolsId',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.LoginAuthConfig.AwsUserPoolsId', props);
    return resource.getResponseField('LoginAuthConfig.AwsUserPoolsId') as unknown as string;
  }

  public get awsUserPoolsWebClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendConfig',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendConfig.LoginAuthConfig.AwsUserPoolsWebClientId'),
        outputPath: 'LoginAuthConfig.AwsUserPoolsWebClientId',
        parameters: {
          AppId: this.__input.appId,
          LoginAuthConfig: {
            AwsCognitoIdentityPoolId: this.__input.loginAuthConfig?.awsCognitoIdentityPoolId,
            AwsCognitoRegion: this.__input.loginAuthConfig?.awsCognitoRegion,
            AwsUserPoolsId: this.__input.loginAuthConfig?.awsUserPoolsId,
            AwsUserPoolsWebClientId: this.__input.loginAuthConfig?.awsUserPoolsWebClientId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendConfig.LoginAuthConfig.AwsUserPoolsWebClientId', props);
    return resource.getResponseField('LoginAuthConfig.AwsUserPoolsWebClientId') as unknown as string;
  }

}

export class AmplifyBackendResponsesUpdateBackendJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AmplifyBackendUpdateBackendJobRequest) {
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.AppId'),
        outputPath: 'AppId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

  public get backendEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.BackendEnvironmentName'),
        outputPath: 'BackendEnvironmentName',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.BackendEnvironmentName', props);
    return resource.getResponseField('BackendEnvironmentName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.Error'),
        outputPath: 'Error',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.Operation'),
        outputPath: 'Operation',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.Operation', props);
    return resource.getResponseField('Operation') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.Status'),
        outputPath: 'Status',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackendJob',
        service: 'AmplifyBackend',
        physicalResourceId: cr.PhysicalResourceId.of('AmplifyBackend.UpdateBackendJob.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          AppId: this.__input.appId,
          BackendEnvironmentName: this.__input.backendEnvironmentName,
          JobId: this.__input.jobId,
          Operation: this.__input.operation,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackendJob.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

