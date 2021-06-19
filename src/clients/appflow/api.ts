import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppflowClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createConnectorProfile(input: shapes.AppflowCreateConnectorProfileRequest): AppflowResponsesCreateConnectorProfile {
    return new AppflowResponsesCreateConnectorProfile(this, this.__resources, input);
  }

  public createFlow(input: shapes.AppflowCreateFlowRequest): AppflowResponsesCreateFlow {
    return new AppflowResponsesCreateFlow(this, this.__resources, input);
  }

  public deleteConnectorProfile(input: shapes.AppflowDeleteConnectorProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnectorProfile',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DeleteConnectorProfile'),
        parameters: {
          connectorProfileName: input.connectorProfileName,
          forceDelete: input.forceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnectorProfile', props);
  }

  public deleteFlow(input: shapes.AppflowDeleteFlowRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DeleteFlow'),
        parameters: {
          flowName: input.flowName,
          forceDelete: input.forceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFlow', props);
  }

  public describeConnectorEntity(input: shapes.AppflowDescribeConnectorEntityRequest): AppflowResponsesDescribeConnectorEntity {
    return new AppflowResponsesDescribeConnectorEntity(this, this.__resources, input);
  }

  public describeConnectorProfiles(input: shapes.AppflowDescribeConnectorProfilesRequest): AppflowResponsesDescribeConnectorProfiles {
    return new AppflowResponsesDescribeConnectorProfiles(this, this.__resources, input);
  }

  public describeConnectors(input: shapes.AppflowDescribeConnectorsRequest): AppflowResponsesDescribeConnectors {
    return new AppflowResponsesDescribeConnectors(this, this.__resources, input);
  }

  public describeFlow(input: shapes.AppflowDescribeFlowRequest): AppflowResponsesDescribeFlow {
    return new AppflowResponsesDescribeFlow(this, this.__resources, input);
  }

  public describeFlowExecutionRecords(input: shapes.AppflowDescribeFlowExecutionRecordsRequest): AppflowResponsesDescribeFlowExecutionRecords {
    return new AppflowResponsesDescribeFlowExecutionRecords(this, this.__resources, input);
  }

  public listConnectorEntities(input: shapes.AppflowListConnectorEntitiesRequest): AppflowResponsesListConnectorEntities {
    return new AppflowResponsesListConnectorEntities(this, this.__resources, input);
  }

  public listFlows(input: shapes.AppflowListFlowsRequest): AppflowResponsesListFlows {
    return new AppflowResponsesListFlows(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppflowListTagsForResourceRequest): AppflowResponsesListTagsForResource {
    return new AppflowResponsesListTagsForResource(this, this.__resources, input);
  }

  public startFlow(input: shapes.AppflowStartFlowRequest): AppflowResponsesStartFlow {
    return new AppflowResponsesStartFlow(this, this.__resources, input);
  }

  public stopFlow(input: shapes.AppflowStopFlowRequest): AppflowResponsesStopFlow {
    return new AppflowResponsesStopFlow(this, this.__resources, input);
  }

  public tagResource(input: shapes.AppflowTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppflowUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConnectorProfile(input: shapes.AppflowUpdateConnectorProfileRequest): AppflowResponsesUpdateConnectorProfile {
    return new AppflowResponsesUpdateConnectorProfile(this, this.__resources, input);
  }

  public updateFlow(input: shapes.AppflowUpdateFlowRequest): AppflowResponsesUpdateFlow {
    return new AppflowResponsesUpdateFlow(this, this.__resources, input);
  }

}

export class AppflowResponsesCreateConnectorProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowCreateConnectorProfileRequest) {
  }

  public get connectorProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorProfile',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.CreateConnectorProfile.connectorProfileArn'),
        outputPath: 'connectorProfileArn',
        parameters: {
          connectorProfileName: this.__input.connectorProfileName,
          kmsArn: this.__input.kmsArn,
          connectorType: this.__input.connectorType,
          connectionMode: this.__input.connectionMode,
          connectorProfileConfig: {
            connectorProfileProperties: {
              Amplitude: {
              },
              Datadog: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.datadog?.instanceUrl,
              },
              Dynatrace: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.dynatrace?.instanceUrl,
              },
              GoogleAnalytics: {
              },
              InforNexus: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.inforNexus?.instanceUrl,
              },
              Marketo: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.marketo?.instanceUrl,
              },
              Redshift: {
                databaseUrl: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.databaseUrl,
                bucketName: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketName,
                bucketPrefix: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketPrefix,
                roleArn: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.roleArn,
              },
              Salesforce: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.salesforce?.instanceUrl,
                isSandboxEnvironment: this.__input.connectorProfileConfig.connectorProfileProperties.salesforce?.isSandboxEnvironment,
              },
              ServiceNow: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.serviceNow?.instanceUrl,
              },
              Singular: {
              },
              Slack: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.slack?.instanceUrl,
              },
              Snowflake: {
                warehouse: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.warehouse,
                stage: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.stage,
                bucketName: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketName,
                bucketPrefix: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketPrefix,
                privateLinkServiceName: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.privateLinkServiceName,
                accountName: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.accountName,
                region: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.region,
              },
              Trendmicro: {
              },
              Veeva: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.veeva?.instanceUrl,
              },
              Zendesk: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.zendesk?.instanceUrl,
              },
            },
            connectorProfileCredentials: {
              Amplitude: {
                apiKey: this.__input.connectorProfileConfig.connectorProfileCredentials.amplitude?.apiKey,
                secretKey: this.__input.connectorProfileConfig.connectorProfileCredentials.amplitude?.secretKey,
              },
              Datadog: {
                apiKey: this.__input.connectorProfileConfig.connectorProfileCredentials.datadog?.apiKey,
                applicationKey: this.__input.connectorProfileConfig.connectorProfileCredentials.datadog?.applicationKey,
              },
              Dynatrace: {
                apiToken: this.__input.connectorProfileConfig.connectorProfileCredentials.dynatrace?.apiToken,
              },
              GoogleAnalytics: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.accessToken,
                refreshToken: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.refreshToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.redirectUri,
                },
              },
              InforNexus: {
                accessKeyId: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.accessKeyId,
                userId: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.userId,
                secretAccessKey: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.secretAccessKey,
                datakey: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.datakey,
              },
              Marketo: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.accessToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.redirectUri,
                },
              },
              Redshift: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.redshift?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.redshift?.password,
              },
              Salesforce: {
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.accessToken,
                refreshToken: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.refreshToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.redirectUri,
                },
                clientCredentialsArn: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.clientCredentialsArn,
              },
              ServiceNow: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.password,
              },
              Singular: {
                apiKey: this.__input.connectorProfileConfig.connectorProfileCredentials.singular?.apiKey,
              },
              Slack: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.accessToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.redirectUri,
                },
              },
              Snowflake: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.snowflake?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.snowflake?.password,
              },
              Trendmicro: {
                apiSecretKey: this.__input.connectorProfileConfig.connectorProfileCredentials.trendmicro?.apiSecretKey,
              },
              Veeva: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.veeva?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.veeva?.password,
              },
              Zendesk: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.accessToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.redirectUri,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectorProfile.connectorProfileArn', props);
    return resource.getResponseField('connectorProfileArn') as unknown as string;
  }

}

export class AppflowResponsesCreateFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowCreateFlowRequest) {
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.CreateFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.__input.flowName,
          description: this.__input.description,
          kmsArn: this.__input.kmsArn,
          triggerConfig: {
            triggerType: this.__input.triggerConfig.triggerType,
            triggerProperties: {
              Scheduled: {
                scheduleExpression: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                dataPullMode: this.__input.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                scheduleStartTime: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                scheduleEndTime: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                timezone: this.__input.triggerConfig.triggerProperties?.scheduled?.timezone,
              },
            },
          },
          sourceFlowConfig: {
            connectorType: this.__input.sourceFlowConfig.connectorType,
            connectorProfileName: this.__input.sourceFlowConfig.connectorProfileName,
            sourceConnectorProperties: {
              Amplitude: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.amplitude?.object,
              },
              Datadog: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.datadog?.object,
              },
              Dynatrace: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.dynatrace?.object,
              },
              GoogleAnalytics: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.googleAnalytics?.object,
              },
              InforNexus: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.inforNexus?.object,
              },
              Marketo: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
              },
              S3: {
                bucketName: this.__input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                bucketPrefix: this.__input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
              },
              Salesforce: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                enableDynamicFieldUpdate: this.__input.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                includeDeletedRecords: this.__input.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
              },
              ServiceNow: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
              },
              Singular: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.singular?.object,
              },
              Slack: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.slack?.object,
              },
              Trendmicro: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.trendmicro?.object,
              },
              Veeva: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.veeva?.object,
              },
              Zendesk: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
              },
            },
            incrementalPullConfig: {
              datetimeTypeFieldName: this.__input.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
            },
          },
          destinationFlowConfigList: this.__input.destinationFlowConfigList,
          tasks: this.__input.tasks,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.CreateFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.__input.flowName,
          description: this.__input.description,
          kmsArn: this.__input.kmsArn,
          triggerConfig: {
            triggerType: this.__input.triggerConfig.triggerType,
            triggerProperties: {
              Scheduled: {
                scheduleExpression: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                dataPullMode: this.__input.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                scheduleStartTime: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                scheduleEndTime: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                timezone: this.__input.triggerConfig.triggerProperties?.scheduled?.timezone,
              },
            },
          },
          sourceFlowConfig: {
            connectorType: this.__input.sourceFlowConfig.connectorType,
            connectorProfileName: this.__input.sourceFlowConfig.connectorProfileName,
            sourceConnectorProperties: {
              Amplitude: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.amplitude?.object,
              },
              Datadog: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.datadog?.object,
              },
              Dynatrace: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.dynatrace?.object,
              },
              GoogleAnalytics: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.googleAnalytics?.object,
              },
              InforNexus: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.inforNexus?.object,
              },
              Marketo: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
              },
              S3: {
                bucketName: this.__input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                bucketPrefix: this.__input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
              },
              Salesforce: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                enableDynamicFieldUpdate: this.__input.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                includeDeletedRecords: this.__input.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
              },
              ServiceNow: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
              },
              Singular: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.singular?.object,
              },
              Slack: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.slack?.object,
              },
              Trendmicro: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.trendmicro?.object,
              },
              Veeva: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.veeva?.object,
              },
              Zendesk: {
                object: this.__input.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
              },
            },
            incrementalPullConfig: {
              datetimeTypeFieldName: this.__input.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
            },
          },
          destinationFlowConfigList: this.__input.destinationFlowConfigList,
          tasks: this.__input.tasks,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

}

export class AppflowResponsesDescribeConnectorEntity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeConnectorEntityRequest) {
  }

  public get connectorEntityFields(): shapes.AppflowConnectorEntityField[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectorEntity',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectorEntity.connectorEntityFields'),
        outputPath: 'connectorEntityFields',
        parameters: {
          connectorEntityName: this.__input.connectorEntityName,
          connectorType: this.__input.connectorType,
          connectorProfileName: this.__input.connectorProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectorEntity.connectorEntityFields', props);
    return resource.getResponseField('connectorEntityFields') as unknown as shapes.AppflowConnectorEntityField[];
  }

}

export class AppflowResponsesDescribeConnectorProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeConnectorProfilesRequest) {
  }

  public get connectorProfileDetails(): shapes.AppflowConnectorProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectorProfiles',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectorProfiles.connectorProfileDetails'),
        outputPath: 'connectorProfileDetails',
        parameters: {
          connectorProfileNames: this.__input.connectorProfileNames,
          connectorType: this.__input.connectorType,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectorProfiles.connectorProfileDetails', props);
    return resource.getResponseField('connectorProfileDetails') as unknown as shapes.AppflowConnectorProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectorProfiles',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectorProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          connectorProfileNames: this.__input.connectorProfileNames,
          connectorType: this.__input.connectorType,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectorProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowResponsesDescribeConnectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeConnectorsRequest) {
  }

  public get connectorConfigurations(): Record<string, shapes.AppflowConnectorConfiguration> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectors',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectors.connectorConfigurations'),
        outputPath: 'connectorConfigurations',
        parameters: {
          connectorTypes: this.__input.connectorTypes,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectors.connectorConfigurations', props);
    return resource.getResponseField('connectorConfigurations') as unknown as Record<string, shapes.AppflowConnectorConfiguration>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectors',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          connectorTypes: this.__input.connectorTypes,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.description'),
        outputPath: 'description',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get flowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowName'),
        outputPath: 'flowName',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.flowName', props);
    return resource.getResponseField('flowName') as unknown as string;
  }

  public get kmsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.kmsArn'),
        outputPath: 'kmsArn',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.kmsArn', props);
    return resource.getResponseField('kmsArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

  public get flowStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowStatusMessage'),
        outputPath: 'flowStatusMessage',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.flowStatusMessage', props);
    return resource.getResponseField('flowStatusMessage') as unknown as string;
  }

  public get sourceFlowConfig(): AppflowResponsesDescribeFlowSourceFlowConfig {
    return new AppflowResponsesDescribeFlowSourceFlowConfig(this.__scope, this.__resources, this.__input);
  }

  public get destinationFlowConfigList(): shapes.AppflowDestinationFlowConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.destinationFlowConfigList'),
        outputPath: 'destinationFlowConfigList',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.destinationFlowConfigList', props);
    return resource.getResponseField('destinationFlowConfigList') as unknown as shapes.AppflowDestinationFlowConfig[];
  }

  public get lastRunExecutionDetails(): AppflowResponsesDescribeFlowLastRunExecutionDetails {
    return new AppflowResponsesDescribeFlowLastRunExecutionDetails(this.__scope, this.__resources, this.__input);
  }

  public get triggerConfig(): AppflowResponsesDescribeFlowTriggerConfig {
    return new AppflowResponsesDescribeFlowTriggerConfig(this.__scope, this.__resources, this.__input);
  }

  public get tasks(): shapes.AppflowTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.tasks'),
        outputPath: 'tasks',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.AppflowTask[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.createdBy'),
        outputPath: 'createdBy',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.createdBy', props);
    return resource.getResponseField('createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastUpdatedBy'),
        outputPath: 'lastUpdatedBy',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.lastUpdatedBy', props);
    return resource.getResponseField('lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.tags'),
        outputPath: 'tags',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get connectorType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.connectorType'),
        outputPath: 'sourceFlowConfig.connectorType',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.connectorType', props);
    return resource.getResponseField('sourceFlowConfig.connectorType') as unknown as string;
  }

  public get connectorProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.connectorProfileName'),
        outputPath: 'sourceFlowConfig.connectorProfileName',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.connectorProfileName', props);
    return resource.getResponseField('sourceFlowConfig.connectorProfileName') as unknown as string;
  }

  public get sourceConnectorProperties(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties(this.__scope, this.__resources, this.__input);
  }

  public get incrementalPullConfig(): AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig {
    return new AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get amplitude(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude(this.__scope, this.__resources, this.__input);
  }

  public get datadog(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog(this.__scope, this.__resources, this.__input);
  }

  public get dynatrace(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace(this.__scope, this.__resources, this.__input);
  }

  public get googleAnalytics(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics(this.__scope, this.__resources, this.__input);
  }

  public get inforNexus(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus(this.__scope, this.__resources, this.__input);
  }

  public get marketo(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo(this.__scope, this.__resources, this.__input);
  }

  public get s3(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3 {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3(this.__scope, this.__resources, this.__input);
  }

  public get salesforce(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce(this.__scope, this.__resources, this.__input);
  }

  public get serviceNow(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow(this.__scope, this.__resources, this.__input);
  }

  public get singular(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular(this.__scope, this.__resources, this.__input);
  }

  public get slack(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack(this.__scope, this.__resources, this.__input);
  }

  public get trendmicro(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro(this.__scope, this.__resources, this.__input);
  }

  public get veeva(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva(this.__scope, this.__resources, this.__input);
  }

  public get zendesk(): AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
    return new AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk(this.__scope, this.__resources, this.__input);
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Amplitude.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Amplitude.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Amplitude.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Amplitude.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Datadog.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Datadog.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Datadog.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Datadog.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Dynatrace.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Dynatrace.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Dynatrace.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Dynatrace.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.InforNexus.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.InforNexus.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.InforNexus.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.InforNexus.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Marketo.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Marketo.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Marketo.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Marketo.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketName'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.S3.bucketName',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketName', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.S3.bucketName') as unknown as string;
  }

  public get bucketPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Salesforce.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Salesforce.object') as unknown as string;
  }

  public get enableDynamicFieldUpdate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate') as unknown as boolean;
  }

  public get includeDeletedRecords(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords') as unknown as boolean;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.ServiceNow.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.ServiceNow.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.ServiceNow.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.ServiceNow.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Singular.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Singular.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Singular.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Singular.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Slack.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Slack.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Slack.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Slack.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Trendmicro.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Trendmicro.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Trendmicro.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Trendmicro.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Veeva.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Veeva.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Veeva.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Veeva.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Zendesk.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Zendesk.object',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Zendesk.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Zendesk.object') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowSourceFlowConfigIncrementalPullConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get datetimeTypeFieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName'),
        outputPath: 'sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName', props);
    return resource.getResponseField('sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowLastRunExecutionDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get mostRecentExecutionMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastRunExecutionDetails.mostRecentExecutionMessage'),
        outputPath: 'lastRunExecutionDetails.mostRecentExecutionMessage',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.lastRunExecutionDetails.mostRecentExecutionMessage', props);
    return resource.getResponseField('lastRunExecutionDetails.mostRecentExecutionMessage') as unknown as string;
  }

  public get mostRecentExecutionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastRunExecutionDetails.mostRecentExecutionTime'),
        outputPath: 'lastRunExecutionDetails.mostRecentExecutionTime',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.lastRunExecutionDetails.mostRecentExecutionTime', props);
    return resource.getResponseField('lastRunExecutionDetails.mostRecentExecutionTime') as unknown as string;
  }

  public get mostRecentExecutionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastRunExecutionDetails.mostRecentExecutionStatus'),
        outputPath: 'lastRunExecutionDetails.mostRecentExecutionStatus',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.lastRunExecutionDetails.mostRecentExecutionStatus', props);
    return resource.getResponseField('lastRunExecutionDetails.mostRecentExecutionStatus') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowTriggerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get triggerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerType'),
        outputPath: 'triggerConfig.triggerType',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.triggerConfig.triggerType', props);
    return resource.getResponseField('triggerConfig.triggerType') as unknown as string;
  }

  public get triggerProperties(): AppflowResponsesDescribeFlowTriggerConfigTriggerProperties {
    return new AppflowResponsesDescribeFlowTriggerConfigTriggerProperties(this.__scope, this.__resources, this.__input);
  }

}

export class AppflowResponsesDescribeFlowTriggerConfigTriggerProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get scheduled(): AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled {
    return new AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled(this.__scope, this.__resources, this.__input);
  }

}

export class AppflowResponsesDescribeFlowTriggerConfigTriggerPropertiesScheduled {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowRequest) {
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleExpression'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.scheduleExpression',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleExpression', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.scheduleExpression') as unknown as string;
  }

  public get dataPullMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.dataPullMode'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.dataPullMode',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.dataPullMode', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.dataPullMode') as unknown as string;
  }

  public get scheduleStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleStartTime'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.scheduleStartTime',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleStartTime', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.scheduleStartTime') as unknown as string;
  }

  public get scheduleEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleEndTime'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.scheduleEndTime',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleEndTime', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.scheduleEndTime') as unknown as string;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.timezone'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.timezone',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.timezone', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.timezone') as unknown as string;
  }

}

export class AppflowResponsesDescribeFlowExecutionRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowDescribeFlowExecutionRecordsRequest) {
  }

  public get flowExecutions(): shapes.AppflowExecutionRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowExecutionRecords',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlowExecutionRecords.flowExecutions'),
        outputPath: 'flowExecutions',
        parameters: {
          flowName: this.__input.flowName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowExecutionRecords.flowExecutions', props);
    return resource.getResponseField('flowExecutions') as unknown as shapes.AppflowExecutionRecord[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowExecutionRecords',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlowExecutionRecords.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          flowName: this.__input.flowName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowExecutionRecords.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowResponsesListConnectorEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowListConnectorEntitiesRequest) {
  }

  public get connectorEntityMap(): Record<string, shapes.AppflowConnectorEntity[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnectorEntities',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListConnectorEntities.connectorEntityMap'),
        outputPath: 'connectorEntityMap',
        parameters: {
          connectorProfileName: this.__input.connectorProfileName,
          connectorType: this.__input.connectorType,
          entitiesPath: this.__input.entitiesPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnectorEntities.connectorEntityMap', props);
    return resource.getResponseField('connectorEntityMap') as unknown as Record<string, shapes.AppflowConnectorEntity[]>;
  }

}

export class AppflowResponsesListFlows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowListFlowsRequest) {
  }

  public get flows(): shapes.AppflowFlowDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlows',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListFlows.flows'),
        outputPath: 'flows',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlows.flows', props);
    return resource.getResponseField('flows') as unknown as shapes.AppflowFlowDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlows',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListFlows.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlows.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AppflowResponsesStartFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowStartFlowRequest) {
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StartFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StartFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

  public get executionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StartFlow.executionId'),
        outputPath: 'executionId',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFlow.executionId', props);
    return resource.getResponseField('executionId') as unknown as string;
  }

}

export class AppflowResponsesStopFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowStopFlowRequest) {
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StopFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StopFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.__input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

}

export class AppflowResponsesUpdateConnectorProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowUpdateConnectorProfileRequest) {
  }

  public get connectorProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnectorProfile',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.UpdateConnectorProfile.connectorProfileArn'),
        outputPath: 'connectorProfileArn',
        parameters: {
          connectorProfileName: this.__input.connectorProfileName,
          connectionMode: this.__input.connectionMode,
          connectorProfileConfig: {
            connectorProfileProperties: {
              Amplitude: {
              },
              Datadog: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.datadog?.instanceUrl,
              },
              Dynatrace: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.dynatrace?.instanceUrl,
              },
              GoogleAnalytics: {
              },
              InforNexus: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.inforNexus?.instanceUrl,
              },
              Marketo: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.marketo?.instanceUrl,
              },
              Redshift: {
                databaseUrl: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.databaseUrl,
                bucketName: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketName,
                bucketPrefix: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketPrefix,
                roleArn: this.__input.connectorProfileConfig.connectorProfileProperties.redshift?.roleArn,
              },
              Salesforce: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.salesforce?.instanceUrl,
                isSandboxEnvironment: this.__input.connectorProfileConfig.connectorProfileProperties.salesforce?.isSandboxEnvironment,
              },
              ServiceNow: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.serviceNow?.instanceUrl,
              },
              Singular: {
              },
              Slack: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.slack?.instanceUrl,
              },
              Snowflake: {
                warehouse: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.warehouse,
                stage: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.stage,
                bucketName: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketName,
                bucketPrefix: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketPrefix,
                privateLinkServiceName: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.privateLinkServiceName,
                accountName: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.accountName,
                region: this.__input.connectorProfileConfig.connectorProfileProperties.snowflake?.region,
              },
              Trendmicro: {
              },
              Veeva: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.veeva?.instanceUrl,
              },
              Zendesk: {
                instanceUrl: this.__input.connectorProfileConfig.connectorProfileProperties.zendesk?.instanceUrl,
              },
            },
            connectorProfileCredentials: {
              Amplitude: {
                apiKey: this.__input.connectorProfileConfig.connectorProfileCredentials.amplitude?.apiKey,
                secretKey: this.__input.connectorProfileConfig.connectorProfileCredentials.amplitude?.secretKey,
              },
              Datadog: {
                apiKey: this.__input.connectorProfileConfig.connectorProfileCredentials.datadog?.apiKey,
                applicationKey: this.__input.connectorProfileConfig.connectorProfileCredentials.datadog?.applicationKey,
              },
              Dynatrace: {
                apiToken: this.__input.connectorProfileConfig.connectorProfileCredentials.dynatrace?.apiToken,
              },
              GoogleAnalytics: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.accessToken,
                refreshToken: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.refreshToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.redirectUri,
                },
              },
              InforNexus: {
                accessKeyId: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.accessKeyId,
                userId: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.userId,
                secretAccessKey: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.secretAccessKey,
                datakey: this.__input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.datakey,
              },
              Marketo: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.accessToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.redirectUri,
                },
              },
              Redshift: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.redshift?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.redshift?.password,
              },
              Salesforce: {
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.accessToken,
                refreshToken: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.refreshToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.redirectUri,
                },
                clientCredentialsArn: this.__input.connectorProfileConfig.connectorProfileCredentials.salesforce?.clientCredentialsArn,
              },
              ServiceNow: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.password,
              },
              Singular: {
                apiKey: this.__input.connectorProfileConfig.connectorProfileCredentials.singular?.apiKey,
              },
              Slack: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.accessToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.redirectUri,
                },
              },
              Snowflake: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.snowflake?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.snowflake?.password,
              },
              Trendmicro: {
                apiSecretKey: this.__input.connectorProfileConfig.connectorProfileCredentials.trendmicro?.apiSecretKey,
              },
              Veeva: {
                username: this.__input.connectorProfileConfig.connectorProfileCredentials.veeva?.username,
                password: this.__input.connectorProfileConfig.connectorProfileCredentials.veeva?.password,
              },
              Zendesk: {
                clientId: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientId,
                clientSecret: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientSecret,
                accessToken: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.accessToken,
                oAuthRequest: {
                  authCode: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.authCode,
                  redirectUri: this.__input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.redirectUri,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnectorProfile.connectorProfileArn', props);
    return resource.getResponseField('connectorProfileArn') as unknown as string;
  }

}

export class AppflowResponsesUpdateFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppflowUpdateFlowRequest) {
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.UpdateFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.__input.flowName,
          description: this.__input.description,
          triggerConfig: {
            triggerType: this.__input.triggerConfig.triggerType,
            triggerProperties: {
              Scheduled: {
                scheduleExpression: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                dataPullMode: this.__input.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                scheduleStartTime: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                scheduleEndTime: this.__input.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                timezone: this.__input.triggerConfig.triggerProperties?.scheduled?.timezone,
              },
            },
          },
          sourceFlowConfig: {
            connectorType: this.__input.sourceFlowConfig?.connectorType,
            connectorProfileName: this.__input.sourceFlowConfig?.connectorProfileName,
            sourceConnectorProperties: {
              Amplitude: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.amplitude?.object,
              },
              Datadog: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.datadog?.object,
              },
              Dynatrace: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.dynatrace?.object,
              },
              GoogleAnalytics: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.googleAnalytics?.object,
              },
              InforNexus: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.inforNexus?.object,
              },
              Marketo: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.marketo?.object,
              },
              S3: {
                bucketName: this.__input.sourceFlowConfig?.sourceConnectorProperties.s3?.bucketName,
                bucketPrefix: this.__input.sourceFlowConfig?.sourceConnectorProperties.s3?.bucketPrefix,
              },
              Salesforce: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.salesforce?.object,
                enableDynamicFieldUpdate: this.__input.sourceFlowConfig?.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                includeDeletedRecords: this.__input.sourceFlowConfig?.sourceConnectorProperties.salesforce?.includeDeletedRecords,
              },
              ServiceNow: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.serviceNow?.object,
              },
              Singular: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.singular?.object,
              },
              Slack: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.slack?.object,
              },
              Trendmicro: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.trendmicro?.object,
              },
              Veeva: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.veeva?.object,
              },
              Zendesk: {
                object: this.__input.sourceFlowConfig?.sourceConnectorProperties.zendesk?.object,
              },
            },
            incrementalPullConfig: {
              datetimeTypeFieldName: this.__input.sourceFlowConfig?.incrementalPullConfig?.datetimeTypeFieldName,
            },
          },
          destinationFlowConfigList: this.__input.destinationFlowConfigList,
          tasks: this.__input.tasks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

}

